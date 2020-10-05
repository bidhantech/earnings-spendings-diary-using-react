import React from 'react';

function Dashboard({ data }) {
    let totalEarn=data;
    let totalSpend=data;
    return <div className="Dashboard">
        <span className="remaining">
        Balance:  {
                        totalEarn.reduce((sum, n) => {
                            if (n.select_type === 'earn')
                                return Number(n.amount) + sum;
                            else
                                return sum + 0;

                        }, 0)
                     - 
                     totalSpend.reduce((sum, n) => {
                        if (n.select_type === 'spend')
                        {
                            return Number(n.amount) + sum;
                        }
                        else
                            return sum + 0;

                    }, 0)
                }
                </span>

        <div className="Dashboard-container">
            <div className="Dashboard-earnings">

                <span>Earning Total: &nbsp;
                       {
                        totalEarn.reduce((sum, n) => {
                            if (n.select_type === 'earn')
                                return Number(n.amount) + sum;
                            else
                                return sum + 0;

                        }, 0)
                    }
                </span>

            </div>

            <div className="Dashboard-spendings">

            <span>Spending Total: &nbsp;
                    {
                        totalSpend.reduce((sum, n) => {
                            if (n.select_type === 'spend')
                            {
                                return Number(n.amount) + sum;
                            }
                            else
                                return sum + 0;

                        }, 0)
                    }
                </span>

            </div>

        </div>
    </div>
}

export default Dashboard;