import React, { useState } from 'react';
import {  View, Text, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
import TaskList from './src/components/TaskList/'
import  *  as  Animatable  from  'react-native-animatable'

const AnimateBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  function handleAdd() {
    if(input === '') return;

    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor='#171d31' barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}> Minhas tarefas </Text>
      </View>

       {/*propriedades do 'flatlist' showsHorizontalScrollIndicator = remove a barra de rolagem mas não perde o scroll
          data -> é as 'options da lista' no renderItem ({ item }) essa forma de importação pega o item que esta sendo passando no extractor
          o keyExtrator captura o index da lista
       */}
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />

      <View style={styles.modalHeader}>
        <Modal animationType="slide" transparent={false} visible={open}>
          <SafeAreaView style={styles.modal}>
            <View>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}> Nova Tarefa </Text>
            </View>

            <Animatable.View animation="fadeInUp" useNativeDriver style={styles.modalBody}>
              <TextInput
                multiline={true}
                placeholderTextColor="#747474"
                autoCorrect={false}
                placeholder='O que preciso fazer hoje?'
                style={styles.modalInput}
                value={input}
                onChangeText={(texto) => setInput(texto)}
              />

              <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
                <Text style={styles.handleText}>
                  Cadastrar
                </Text>
              </TouchableOpacity>
            </Animatable.View>

          </SafeAreaView>
        </Modal>
      </View>

      <AnimateBtn
        useNativeDriver
        animation="bounceIn"
        duration={1500}
        style={styles.fab}
        onPress={() => setOpen(true) }
      >
        <Ionicons name="ios-add" size={35} color="#fff" />
      </AnimateBtn>

    </SafeAreaView>
  );
}
