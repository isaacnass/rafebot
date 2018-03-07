

<template>
  <div class="container" v-chat-scroll>
    <div class="message" v-for="chat in chats" v-bind:class="{ 'right-side': chat.self}" v-on:click="handleClick(chat)">
      {{ chat.text }}
    </div>
  </div>
</template>

<script>
import ChatFunctions from '@/helpers/ChatFunctions'

export default {
  name: 'Chat',
  data() {
    return {
      chats: [
        { text: 'Hello' },
        {
          text: 'Click me to add a new chat',
          self: true,
          click_event: 'BasicAddRandom',
        },
      ],
    }
  },
  methods: {
    handleClick: function(chat) {
      if (chat.click_event && ChatFunctions[chat.click_event]) {
        this.chats.push(ChatFunctions[chat.click_event]())
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  align-items: flex-start;
  padding: 10px;

  > * {
    margin-top: 12px;
    margin-bottom: 12px;
    clear: both;
  }
}

.message {
  margin-top: 6px;
  margin-bottom: 6px;
  clear: both;
  max-width: 66%;
  width: initial;
  background-color: blue;
  color: white;
  text-align: left;
  padding: 10px;
  border-radius: 4px;
}

.message.right-side {
  background-color: purple;
  align-self: flex-end;
}
</style>
