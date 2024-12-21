<script lang="ts">
    import { onMount } from "svelte";
    import io, { Socket } from "socket.io-client";

    let messages: string[] = [];
    let newMessage = "";
    let socket: Socket;

    // Conectar ao servidor Socket.IO
    onMount(() => {
        socket = io("http://localhost:3000"); // Substitua pelo endereço do servidor, se necessário

        // Escuta mensagens do servidor
        socket.on("chat_message", (message) => {
            messages = [...messages, message];
        });

        return () => {
            socket.disconnect();
        };
    });

    // Enviar mensagem para o servidor
    const sendMessage = () => {
        if (newMessage.trim()) {
            socket.emit("chat_message", newMessage);
            newMessage = "";
        }
    };
</script>

<div class="chat">
    <div class="messages">
        {#each messages as msg}
            <div>{msg}</div>
        {/each}
    </div>

    <div class="input-area">
        <input
            type="text"
            bind:value={newMessage}
            placeholder="Digite sua mensagem"
            on:keypress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button on:click={sendMessage}>Enviar</button>
    </div>
</div>

<style>
    .chat {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: auto;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 10px;
    }
    .messages {
        flex-grow: 1;
        overflow-y: auto;
        max-height: 400px;
        margin-bottom: 10px;
    }
    .input-area {
        display: flex;
        gap: 10px;
    }
</style>
