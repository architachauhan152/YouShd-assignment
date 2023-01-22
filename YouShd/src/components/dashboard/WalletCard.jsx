import React from 'react'

export const WalletCard = () => {
  return (
    <div>
        <div className='walletCard'>
                <div className='totalEarn'>Total earnings withdrawn</div>
                <div className='totalAmt'>$0</div>
                <div>
                    <div className='walletCardSub'>
                        <div className='walletSubAmt'>$0</div>
                        <div className='walletSubEarn'>Current balance</div>
                    </div>

                    <div className='walletCardSub'>
                        <div className='walletSubAmt'>$0</div>
                        <div className='walletSubEarn'>Available to withdraw</div>
                    </div>
                </div>
            </div>
    </div>
  )
}
