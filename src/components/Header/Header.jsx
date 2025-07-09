import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "..";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="shadow bg-white sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4 relative">
          {/* Logo */}
          <Link to="/" className="mr-4">
            <Logo width="70px" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-full transition duration-200 hover:bg-indigo-50"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col gap-2 p-4 z-40"
              >
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li key={item.name}>
                        <button
                          onClick={() => {
                            navigate(item.slug);
                            setIsOpen(false);
                          }}
                          className="w-full text-left text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition hover:bg-indigo-50"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
