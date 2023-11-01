import Player from "./components/Player";

const App = () =>{
  return(<>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player
              name="Player 1"
              symbol="x"
            />
            <Player
              name="Player 2"
              symbol="O"
            />
          </ol>

          GAME
        </div>
        LOGS
      </main>
    </>
  );
}

export default App;