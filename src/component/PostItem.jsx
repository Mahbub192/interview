import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PostItem = ({ post, onLike }) => {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>{post.userName}</Text>
      <Text style={styles.timestamp}>{new Date(post.timestamp).toLocaleString()}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.likeContainer}>
        <Button title="Like" onPress={onLike} />
        <Text style={styles.likes}>{post.likes} Likes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  content: {
    marginVertical: 10,
    fontSize: 14,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    marginLeft: 10,
    fontSize: 14,
    color: '#666',
  },
});

export default PostItem;
