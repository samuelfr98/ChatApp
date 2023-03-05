/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      Messages {
        items {
          id
          text
          chat_room_id
          user_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      LastMessage {
        id
        text
        chat_room_id
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chat_room_id
          user_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chat_room_id
          user_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      chat_room_id
      user_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        chat_room_id
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        text
        chat_room_id
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByChat_room_id = /* GraphQL */ `
  query MessagesByChat_room_id(
    $chat_room_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChat_room_id(
      chat_room_id: $chat_room_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chat_room_id
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByUser_id = /* GraphQL */ `
  query MessagesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chat_room_id
        user_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      status
      image
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Message {
        items {
          id
          text
          chat_room_id
          user_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        image
        ChatRooms {
          nextToken
          startedAt
        }
        Message {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        status
        image
        ChatRooms {
          nextToken
          startedAt
        }
        Message {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        Messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        LastMessage {
          id
          text
          chat_room_id
          user_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        status
        image
        ChatRooms {
          nextToken
          startedAt
        }
        Message {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        user {
          id
          name
          status
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserChatRooms = /* GraphQL */ `
  query SyncUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        user {
          id
          name
          status
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        user {
          id
          name
          status
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        user {
          id
          name
          status
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
