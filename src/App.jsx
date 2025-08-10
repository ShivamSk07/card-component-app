import Card from './components/Card'
import './App.css'

function App() {
  // Array of card titles to demonstrate passing props
  const cardTitles = [
    'Beautiful Sunset',
    'Mountain Adventure',
    'Ocean Waves',
    'City Lights',
    'Forest Walk'
  ];

  return (
    <div className="app">
      <h1>Card Component</h1>
      <div className="cards-container">
        {cardTitles.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </div>
    </div>
  )
}

export default App
