// Groups.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  FlatList,
  SafeAreaView,
  Alert,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './GroupsStyles';
import Header from '../../components/Header/Header';
import CustomSidebar from '../../components/Sidebar/Sidebar';
import { Group, GroupMember, GroupsScreenProps } from './types';

export const GroupsScreen: React.FC<GroupsScreenProps> = ({ navigation }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<GroupMember[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Mock data for available contacts
  const availableContacts: GroupMember[] = [
    { id: '1', name: 'John Doe', image: 'https://placeholder.com/50' },
    { id: '2', name: 'Jane Smith', image: 'https://placeholder.com/50' },
    { id: '3', name: 'Mike Johnson', image: 'https://placeholder.com/50' },
  ];

  const createNewGroup = () => {
    if (!newGroupName.trim() || selectedMembers.length === 0) {
      Alert.alert('Error', 'Please enter a group name and select at least one member');
      return;
    }

    const newGroup: Group = {
      id: Date.now().toString(),
      name: newGroupName,
      description: newGroupDesc,
      members: selectedMembers,
    };

    setGroups([...groups, newGroup]);
    setIsCreating(false);
    setNewGroupName('');
    setNewGroupDesc('');
    setSelectedMembers([]);
  };

  const toggleMemberSelection = (member: GroupMember) => {
    if (selectedMembers.find(m => m.id === member.id)) {
      setSelectedMembers(selectedMembers.filter(m => m.id !== member.id));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const renderGroup = ({ item }: { item: Group }) => (
    <TouchableOpacity style={styles.groupItem}>
      <View style={styles.groupImageContainer}>
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.groupImage} />
        ) : (
          <View style={styles.groupImagePlaceholder}>
            <Text style={styles.groupImagePlaceholderText}>
              {item.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupMembers}>
          {item.members.length} members
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (isCreating) {
    return (
      <ImageBackground 
        source={require('../../assets/fondo.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>
          <Header 
            onMenuPress={() => setSidebarOpen(true)}
            customTitle="Nuevo Grupo"
            showBackButton
            onBackPress={() => setIsCreating(false)}
          />

          <View style={styles.createGroupForm}>
            <TextInput
              style={styles.input}
              placeholder="Nombre del Grupo"
              value={newGroupName}
              onChangeText={setNewGroupName}
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción (opcional)"
              value={newGroupDesc}
              onChangeText={setNewGroupDesc}
            />

            <Text style={styles.sectionTitle}>Agregar Participantes</Text>
            <FlatList
              data={availableContacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.contactItem}
                  onPress={() => toggleMemberSelection(item)}
                >
                  <Image 
                    source={{ uri: item.image }} 
                    style={styles.contactImage}
                  />
                  <Text style={styles.contactName}>{item.name}</Text>
                  {selectedMembers.find(m => m.id === item.id) && (
                    <Ionicons 
                      name="checkmark-circle" 
                      size={24} 
                      color="#007AFF" 
                      style={styles.selectedIcon}
                    />
                  )}
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity 
              style={[
                styles.createButton,
                (!newGroupName.trim() || selectedMembers.length === 0) && 
                styles.createButtonDisabled
              ]}
              onPress={createNewGroup}
              disabled={!newGroupName.trim() || selectedMembers.length === 0}
            >
              <Text style={styles.createButtonText}>Crear Grupo</Text>
            </TouchableOpacity>
          </View>

          <CustomSidebar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground 
      source={require('../../assets/fondo.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Header 
          onMenuPress={() => setSidebarOpen(true)}
          customTitle="Grupos" 
        />

        {groups.length > 0 ? (
          <FlatList
            data={groups}
            keyExtractor={(item) => item.id}
            renderItem={renderGroup}
            style={styles.content}
          />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No hay grupos todavía</Text>
            <Text style={styles.emptyStateSubtext}>
              Crea un grupo para comenzar a chatear con varias personas a la vez
            </Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.fab}
          onPress={() => setIsCreating(true)}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <CustomSidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GroupsScreen;