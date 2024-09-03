import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addPost, likePost } from '../redux/postSlice';
import PostItem from './PostItem';

const MainScreen = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [content, setContent] = useState('');

  const validateForm = () => {
    if (!userName.trim()) {
      Alert.alert('Validation Error', 'User name is required.');
      return false;
    }
    if (!content.trim()) {
      Alert.alert('Validation Error', 'Post content is required.');
      return false;
    }
    if (content.length > 200) {
      Alert.alert('Validation Error', 'Post content cannot exceed 200 characters.');
      return false;
    }
    return true;
  };

  const handleAddPost = () => {
    if (!validateForm()) return;

    const newPost = {
      id: posts.length ? Math.max(posts.map(post => post.id)) + 1 : 1,
      userName,
      timestamp: new Date().toISOString(),
      content,
      likes: 0,
    };
    dispatch(addPost(newPost));
    setUserName('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={4}
        />
        <Button title="Add Post" onPress={handleAddPost} />
      </View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem post={item} onLike={() => dispatch(likePost(item.id))} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
