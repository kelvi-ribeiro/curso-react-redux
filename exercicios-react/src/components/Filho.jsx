import React from 'react'

export default props =>
    <div>
        <button 
                onClick={() => props.notificarSaida('Cinema')}>
                Vou sair
        </button>
    </div>