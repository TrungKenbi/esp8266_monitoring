import './App.css';

import "firebase/database";
import {
    FirebaseDatabaseNode
} from "@react-firebase/database";

function App() {
    return (
        <div className="App">
            <FirebaseDatabaseNode path="humi/">
                {({value}) =>
                    <>
                        <pre>
                            <p>Độ ẩm: </p>
                            <b>{value} %</b>
                        </pre>
                    </>
                }
            </FirebaseDatabaseNode>

            <FirebaseDatabaseNode path="temp/">
                {({value}) =>
                    <>
                        <pre>
                            <p>Nhiệt độ: </p>
                            <b>{value} °C</b>
                        </pre>
                    </>
                }
            </FirebaseDatabaseNode>
        </div>
    );
}

export default App;
