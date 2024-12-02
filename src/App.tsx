import './App.css'
import ActiveStreaks from './components/active-streaks/Active-streaks'
import Header from './components/header/header'

function App() {
  const data = {
    'Active Streaks': {
      name: 'active-streaks',
      count: '3/4'
    },
    'Total Money': {
      name: 'total-money',
      count: '$559'
    },
    'Next Milestone': {
      name: 'next-milestone',
      count: '2 days to 1 month'
    }
  }

  return (
    <>
      <div className='body'>
        <Header />
        <div className='title'>
          <h1>Today's Overview</h1>
        </div>

        <ActiveStreaks
          title="Active Streaks"
          data={data['Active Streaks']}
        />
        <ActiveStreaks
          title="Total Money"
          data={data['Total Money']}
        />
        <ActiveStreaks
          title="Next Milestone"
          data={data['Next Milestone']}
        />
      </div>
    </>
  )
}

export default App