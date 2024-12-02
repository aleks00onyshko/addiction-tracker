import './App.css'
import ActiveStreaks from './components/active-streaks/Active-streaks'
import Header from './components/header/header'
import AddictionCard from './components/addiction-card/addiction-card.tsx';
import {AddictionStatus, AddictionType} from "./models/addiction.ts";

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

  const sampleAddiction: Addiction = {
    id: '1',
    name: 'Quit Smoking',
    type: AddictionType.NICOTINE,
    startDate: new Date(2024, 0, 1),  // January 1, 2024
    currentStreak: 7,
    lastCheckIn: new Date(),  // current date/time
    status: AddictionStatus.GOOD,
    moneySaved: 84
  };

  const handleCheckIn = (id: string) => {
    console.log('Checking in for addiction:', id);
    // Add your check-in logic here
  };

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


      <AddictionCard
          addiction={sampleAddiction}
          onCheckIn={handleCheckIn}
      />

    </>
  )
}

export default App