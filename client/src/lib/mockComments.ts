import { IPost } from "@/types/API";

export const mockComments: IPost[] = [
  {
    id: "f57b120d-ec72-4897-bda9-826b32d9a217", // comment 1
    created_at: "2024-10-28T10:00:00Z",
    user: "john_doe",
    user_id: "a3c2e1b0-50ba-4e4e-a10e-6b97375d32a7",
    title: null,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Donec placerat feugiat neque, vitae ullamcorper ligula. Donec placerat feugiat neque, vitae ullamcorper ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Donec placerat feugiat neque, vitae ullamcorper ligula. Donec placerat feugiat neque, vitae ullamcorper ligula.",
    url: null,
    parent: null,
    children: [
      {
        id: "a29c5678-98cb-4422-81a2-3de493a0f9d9", // nested comment 1
        created_at: "2024-10-28T10:00:00Z",
        user: "jane_doe",
        user_id: "1b5f3c8b-e431-4b4c-9384-0b198d02e0df",
        title: null,
        content: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
        url: null,
        parent: "f57b120d-ec72-4897-bda9-826b32d9a217",
        children: [],
        descendants: 0,
        score: 5,
      }
    ],
    descendants: 1,
    score: 10,
  },
  {
    id: "c435b562-0c64-4977-816e-08cb4fa2362e", // comment 2
    created_at: "2024-10-28T10:00:00Z",
    user: "alex_smith",
    user_id: "d37f74c1-c5a2-46a2-99a4-293ce5d5b0c2",
    title: null,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Donec placerat feugiat neque, vitae ullamcorper ligula. Donec placerat feugiat neque, vitae ullamcorper ligula.",
    url: null,
    parent: null,
    children: [],
    descendants: 0,
    score: 8,
  },
  {
    id: "fb0f23b7-13b9-438f-bab1-cf5989df7c7c", // comment 3
    created_at: "2024-10-28T10:00:00Z",
    user: "mary_jones",
    user_id: "2df5708d-4816-4f66-bb84-2bfc84edab12",
    title: null,
    content: "Phasellus viverra nulla ut metus varius laoreet.",
    url: null,
    parent: null,
    children: [
      {
        id: "33ab4f5c-7246-4c26-abc1-14e7f5f80ab9", // nested comment 2
        created_at: "2024-10-28T10:00:00Z",
        user: "michael_clark",
        user_id: "c32b7150-d5db-4a09-99d2-726be18d3677",
        title: null,
        content: "Curabitur ullamcorper ultricies nisi.",
        url: null,
        parent: "fb0f23b7-13b9-438f-bab1-cf5989df7c7c",
        children: [
          {
            id: "5c3f1f1d-8cb1-4c7d-8c7a-1c67df28df3b", // grandchild comment
            created_at: "2024-10-28T10:00:00Z",
            user: "anna_white",
            user_id: "9cb7e02d-f9aa-4f0d-9279-d8746c0321df",
            title: null,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Donec placerat feugiat neque, vitae ullamcorper ligula. Donec placerat feugiat neque, vitae ullamcorper ligula.",
            url: null,
            parent: "33ab4f5c-7246-4c26-abc1-14e7f5f80ab9",
            children: [],
            descendants: 0,
            score: 4,
          }
        ],
        descendants: 1,
        score: 3,
      },
      {
        id: "4f5c58de-e923-47c4-96fa-14b37c2dd7a2", // nested comment 3
        created_at: "2024-10-28T10:00:00Z",
        user: "laura_brown",
        user_id: "e7c32d54-f9a8-4d43-a9b7-7b2b61d6f5d8",
        title: null,
        content: "Etiam sit amet orci eget eros faucibus tincidunt.",
        url: null,
        parent: "fb0f23b7-13b9-438f-bab1-cf5989df7c7c",
        children: [],
        descendants: 0,
        score: 6,
      }
    ],
    descendants: 2,
    score: 15,
  },
  {
    id: "d49f07a7-8be1-4399-a1be-d60b72a993cd", // comment 4
    created_at: "2024-10-28T10:00:00Z",
    user: "chris_lee",
    user_id: "b1d84a42-2f07-4906-a63d-d6d6587c7f2b",
    title: null,
    content: "Mauris sollicitudin fermentum libero.",
    url: null,
    parent: null,
    children: [],
    descendants: 0,
    score: 12,
  },
];