import { FriendsList } from './FriendsList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistiry } from './TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}/>
            <Statistics
                title="Upload stats"
                stats={data} />
            <FriendsList
                friends={friends}/>
            <TransactionHistiry
                items={transactions} />
            
        </div>
    )
}