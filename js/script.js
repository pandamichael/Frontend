async function deleteMessage(messageId) {
    if (!confirm("確定要刪除此留言嗎？")) return;
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/messages/${messageId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            fetchMessages();
        } else {
            console.error('刪除留言失敗');
        }
    } catch (error) {
        console.error('刪除留言時發生錯誤:', error);
    }
}