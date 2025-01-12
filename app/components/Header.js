'use client'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <img src="/logo.png" alt="Logo" className="logo-image" />
                    <span>股市查詢</span>
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><Link href="/">首頁</Link></li>
                    <li><Link href="/stock-quote">即時股價查詢</Link></li>
                    <li><Link href="/historical-data">歷史股價查詢</Link></li>
                    <li><Link href="/foreign-holdings">外資持股查詢</Link></li>
                    <li><Link href="/transaction-data">成交資訊</Link></li>
                    <li><Link href="/margin">融資融券</Link></li>
                </ul>
            </nav>
            <div className="search-container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="搜尋股票代碼或名稱"
                    className="search-bar"
                />
            </div>
            <div className="user-settings">
                {/* 用戶設定按鈕：登錄、註冊、登出等 */}
                <Link href="/login">登入</Link>
            </div>
        </header>
    )
}

export default Header
