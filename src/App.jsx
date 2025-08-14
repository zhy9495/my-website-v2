import PersonalWebsite from './components/PersonalWebsite.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      {/* 为固定定位的 Header 留出空间 */}
      <div className="pt-20">
        <PersonalWebsite />
      </div>
    </div>
  );
}

export default App;
