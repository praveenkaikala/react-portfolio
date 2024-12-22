function NavLink({ item, mobile }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return mobile ? (
    <button
      onClick={() => scrollToSection(item)}
      className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded-md"
    >
      {item}
    </button>
  ) : (
    <button
      onClick={() => scrollToSection(item)}
      className="text-gray-700 hover:text-purple-600 transition-colors"
    >
      {item}
    </button>
  );
}

export default NavLink;