export const winningMessage = (currentPlayer) => `${currentPlayer}の勝ち！`;
export const drawMessage = () => `引き分け!`;
export const currentPlayerTurnMessage = (currentPlayer, currentPlayerName) => {
    return currentPlayerName === "" ? 
        `${currentPlayer}の番` :
        `${currentPlayer}(${currentPlayerName})の番`;
};
export const scoreMessage = (playerScore, opponentScore) => `${playerScore} - ${opponentScore}`;
