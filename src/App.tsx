import AuthProvider from "./auth/auth.tsx";
import ActiveStreaks from "./components/active-streaks/Active-streaks";
import AddictionCard from "./components/addiction-card/addiction-card";
import Header from "./components/header/header";
import { Addiction, AddictionType, AddictionStatus } from "./models/addiction";

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
  };

  const sampleAddictions: Addiction[] = [
    {
      id: '1',
      name: 'Quit Smoking',
      type: AddictionType.NICOTINE,
      startDate: new Date(2024, 0, 1), // January 1, 2024
      currentStreak: 7,
      lastCheckIn: new Date(),
      status: AddictionStatus.GOOD,
      moneySaved: 84
    },
    {
      id: '2',
      name: 'Limit Alcohol',
      type: AddictionType.ALCOHOL,
      startDate: new Date(2024, 0, 15), // January 15, 2024
      currentStreak: 15,
      lastCheckIn: new Date(),
      status: AddictionStatus.WARNING,
      moneySaved: 45
    },
    {
      id: '3',
      name: 'Reduce Sugar',
      type: AddictionType.SUGAR,
      startDate: new Date(2023, 11, 1), // December 1, 2023
      currentStreak: 30,
      lastCheckIn: new Date(),
      status: AddictionStatus.GOOD,
      moneySaved: 20
    }
  ];

  const handleCheckIn = (id: string) => {
    console.log('Checking in for addiction:', id);
    // Add your check-in logic here
  };

  return (
    <AuthProvider>
      <div className='body'>
        <div className='header'>
          <Header />
        </div>

        <div className='active-streaks'>
          <div className='active-streaks-title'>
            <h1>Today's Overview</h1>
          </div>

          <ActiveStreaks data={data['Active Streaks']} />
          <ActiveStreaks data={data['Total Money']} />
          <ActiveStreaks data={data['Next Milestone']} />
        </div>

        <div className='additional-cards'>
          {sampleAddictions.map((addiction) => (
            <AddictionCard
              key={addiction.id}
              addiction={addiction}
              onCheckIn={handleCheckIn}
            />
          ))}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
