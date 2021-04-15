import './App.scss';
import { MainContent } from './components/MainContent/MainContent';
import { PageIndicator } from './components/PageIndicator/PageIndicator';

function App() {
    return (
        <div className="App">
            <MainContent />
            <PageIndicator />
        </div>
    );
}

export default App;
