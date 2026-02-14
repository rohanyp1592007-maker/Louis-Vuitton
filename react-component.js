// React Component Version
class LouisVuittonApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            notifications: [],
            currentSection: 'home'
        };
    }

    componentDidMount() {
        this.initScrollEffects();
    }

    initScrollEffects = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;
        
        if (this.validateEmail(email)) {
            this.showNotification('Thank you for subscribing!', 'success');
            this.setState({ email: '' });
        } else {
            this.showNotification('Please enter a valid email address', 'error');
        }
    }

    validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showNotification = (message, type) => {
        const notification = {
            id: Date.now(),
            message,
            type
        };
        
        this.setState(prevState => ({
            notifications: [...prevState.notifications, notification]
        }));
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            this.removeNotification(notification.id);
        }, 3000);
    }

    removeNotification = (id) => {
        this.setState(prevState => ({
            notifications: prevState.notifications.filter(n => n.id !== id)
        }));
    }

    handleProductClick = (productName) => {
        this.showNotification(`Viewing ${productName}`, 'info');
    }

    handleImageClick = (path) => {
        this.copyToClipboard(path);
        this.showNotification(`Copied path: ${path}`, 'info');
    }

    copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    scrollToSection = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            const offsetTop = element.offsetTop - 120;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    render() {
        const { email, notifications } = this.state;
        
        const products = [
            {
                id: 1,
                name: "MONOGRAM NEVERFULL MM",
                category: "Handbags",
                price: "₹ 2,45,000",
                imagePath: "product1-path"
            },
            {
                id: 2,
                name: "CAPUCINES BB",
                category: "Handbags",
                price: "₹ 3,85,000",
                imagePath: "product2-path"
            },
            {
                id: 3,
                name: "LV TRAINER SNEAKER",
                category: "Shoes",
                price: "₹ 95,000",
                imagePath: "product3-path"
            },
            {
                id: 4,
                name: "TAMBOUR HORNBILL",
                category: "Watches",
                price: "₹ 4,25,000",
                imagePath: "product4-path"
            }
        ];

        return (
            <div className="app">
                {/* Header */}
                <header className="header">
                    <div className="header-top">
                        <div className="location-selector">
                            <i className="fas fa-globe"></i>
                            <span>India</span>
                        </div>
                    </div>
                    
                    <nav className="main-nav">
                        <div className="nav-container">
                            <div className="nav-logo">
                                <h1>LOUIS VUITTON</h1>
                            </div>
                            
                            <ul className="nav-menu">
                                <li><a href="#women" onClick={(e) => { e.preventDefault(); this.scrollToSection('.featured-products'); }}>WOMEN</a></li>
                                <li><a href="#men" onClick={(e) => { e.preventDefault(); this.scrollToSection('.collections'); }}>MEN</a></li>
                                <li><a href="#collections" onClick={(e) => { e.preventDefault(); this.scrollToSection('.collections'); }}>COLLECTIONS</a></li>
                                <li><a href="#new" onClick={(e) => { e.preventDefault(); this.scrollToSection('.hero'); }}>NEW</a></li>
                            </ul>
                            
                            <div className="nav-icons">
                                <i className="fas fa-search"></i>
                                <i className="fas fa-user"></i>
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h2 className="hero-title">SPRING-SUMMER 2024</h2>
                        <p className="hero-subtitle">DISCOVER THE NEW COLLECTION</p>
                        <button className="hero-button">SHOP NOW</button>
                    </div>
                    <div className="hero-image">
                        <div 
                            className="image-placeholder" 
                            data-src="hero-image-path"
                            onClick={() => this.handleImageClick('hero-image-path')}
                        >
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="collection">
                    <div className="section-header">
                        <h2>COLLECTION</h2>
                    </div>
                    <div className="products-grid">
                        {products.map(product => (
                            <div 
                                key={product.id} 
                                className="product-card"
                                onClick={() => this.handleProductClick(product.name)}
                            >
                                <div className="product-image">
                                    <div 
                                        className="image-placeholder" 
                                        data-src={product.imagePath}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            this.handleImageClick(product.imagePath);
                                        }}
                                    ></div>
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.category}</p>
                                    <span className="price">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Collections Section */}
                <section className="collections">
                    <div className="collection-item">
                        <div className="collection-image">
                            <div 
                                className="image-placeholder" 
                                data-src="collection1-path"
                                onClick={() => this.handleImageClick('collection1-path')}
                            ></div>
                        </div>
                        <div className="collection-content">
                            <h3>WOMEN'S COLLECTION</h3>
                            <p>Discover the latest women's fashion and accessories</p>
                            <button className="collection-button">EXPLORE</button>
                        </div>
                    </div>
                    
                    <div className="collection-item reverse">
                        <div className="collection-image">
                            <div 
                                className="image-placeholder" 
                                data-src="collection2-path"
                                onClick={() => this.handleImageClick('collection2-path')}
                            ></div>
                        </div>
                        <div className="collection-content">
                            <h3>MEN'S COLLECTION</h3>
                            <p>Explore sophisticated men's fashion and accessories</p>
                            <button className="collection-button">EXPLORE</button>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="newsletter">
                    <div className="newsletter-content">
                        <h2>STAY IN TOUCH</h2>
                        <p>Subscribe to receive updates on new arrivals, special offers and our latest news</p>
                        <form className="newsletter-form" onSubmit={this.handleSubmit}>
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                value={email}
                                onChange={this.handleEmailChange}
                                required
                            />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>PRODUCTS</h4>
                            <ul>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Watches</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4>CUSTOMER SERVICE</h4>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4>ABOUT LOUIS VUITTON</h4>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Sustainability</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h4>FOLLOW US</h4>
                            <div className="social-icons">
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2024 Louis Vuitton. All rights reserved.</p>
                    </div>
                </footer>

                {/* Notifications */}
                <div className="notifications-container">
                    {notifications.map(notification => (
                        <div 
                            key={notification.id}
                            className={`notification notification-${notification.type}`}
                            onClick={() => this.removeNotification(notification.id)}
                        >
                            {notification.message}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

// Render the React app
// ReactDOM.render(<LouisVuittonApp />, document.getElementById('root'));