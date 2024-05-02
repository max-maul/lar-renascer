async function ajax(endpoint: string, method: string, data?: any): Promise<void> {
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(endpoint, requestOptions);
        if (response.ok) {
            const responseData = await response.json();
            return responseData; // Aqui você pode manipular a resposta
        } else {
            console.error('Ocorreu um erro na requisição.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

