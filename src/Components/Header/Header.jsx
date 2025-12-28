import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-white/95 to-gray-50/95 border-b border-gray-200/50 sticky top-0 z-50 shadow-2xl">
      <Container>
        <nav className="flex items-center justify-between py-4 px-2">
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <div className="transform transition-all duration-300 group-hover:scale-105">
                <Logo width="180px" />
              </div>
            </Link>
          </div>

          <ul className="flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="relative px-4 py-2.5 text-sm font-medium text-gray-700 
                                             bg-white/80 hover:bg-gray-100/90 
                                             border border-gray-300/50 hover:border-gray-400/70
                                             rounded-xl transition-all duration-300 
                                             hover:shadow-lg hover:shadow-emerald-500/20
                                             hover:text-gray-900 hover:-translate-y-0.5
                                             active:translate-y-0 active:shadow-md
                                             backdrop-blur-sm group overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 to-green-600/0 
                                                  group-hover:from-emerald-600/10 group-hover:to-green-600/10 
                                                  transition-all duration-300"
                    ></div>
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="ml-2 lg:ml-4">
                <div className="pl-4 border-l border-gray-300/50">
                  <LogoutBtn />
                </div>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
