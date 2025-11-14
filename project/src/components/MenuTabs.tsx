interface MenuTabsProps {
  categories: { id: string; name: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function MenuTabs({ categories, activeTab, onTabChange }: MenuTabsProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex gap-3 min-w-max pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onTabChange(category.id)}
            className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === category.id
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-yellow-400 shadow-lg shadow-red-600/30 scale-105'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-yellow-400'
            }`}
            style={{ direction: 'rtl' }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
