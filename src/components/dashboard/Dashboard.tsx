import React from 'react';
import { Users, DollarSign, TrendingUp, Target } from 'lucide-react';
import DashboardHeader from './DashboardHeader';
import StatsCard from './stats/StatsCard';
import DealsList from './deals/DealsList';
import ActivitiesList from './activities/ActivitiesList';
import CustomersList from './customers/CustomersList';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-emerald-900">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Customers"
            value="1,234"
            change={12}
            icon={Users}
          />
          <StatsCard
            title="Revenue"
            value="$48,234"
            change={8}
            icon={DollarSign}
          />
          <StatsCard
            title="Active Deals"
            value="23"
            change={-3}
            icon={TrendingUp}
          />
          <StatsCard
            title="Conversion Rate"
            value="64%"
            change={5}
            icon={Target}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <DealsList />
            <ActivitiesList />
          </div>
          <div>
            <CustomersList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;