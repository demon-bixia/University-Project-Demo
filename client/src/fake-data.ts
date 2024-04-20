import type { IStoreData } from "./types";

const FAKE_DATA: IStoreData = {
  loading: true,
  user: { username: "Alice", status: "Online" },
  messages: [
    {
      from: "Alice",
      to: "Bob",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      from: "Bob",
      to: "Alice",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      from: "Alice",
      to: "Bob",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      from: "Bob",
      to: "Alice",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      from: "Alice",
      to: "Bob",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ],
  logEntries: [
    {
      date: '12:30',
      title: 'Received Key bundle from server.',
      more: {
        IDKA: '705362851087197....',
        SPKB: '7197227133138997....',
        DH: '399775139864916....'
      }
    },
    {
      date: '12:30',
      title: 'DH with IDKA and Bob’s SPK.'
    },
    {
      date: '12:30',
      title: 'DH with  EK  and IDKB.'
    },
    {
      date: '12:30',
      title: 'Message signed with EdDSA.'
    },
    {
      date: '12:30',
      title: 'Message encrypted with AES.'
    }
  ]
};

export default FAKE_DATA;
