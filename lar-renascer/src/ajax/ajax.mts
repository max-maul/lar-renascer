export interface apiResponse {
    status: "error" | "success";
    message: string;
}

export async function ajax(endpoint: string, method: string, data?: any): Promise<apiResponse> {
    const endpointFormatted = `http://localhost:3001/api/v1` + endpoint;
    
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(endpointFormatted, requestOptions);
        if (response.ok) {
            const responseData = await response.json();
            return responseData; // Aqui você pode manipular a resposta
        } else {
            console.error('Ocorreu um erro na requisição.');
            return ({status: "error", message: "Erro inesperado"});
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        return ({status: "error", message: "Erro interno do servidor"});
    }
}

