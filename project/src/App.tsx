import { useState } from 'react';
import { menuData } from './data/menuData';
import MenuTabs from './components/MenuTabs';
import MenuItemCard from './components/MenuItemCard';
import MenuItemDialog from './components/MenuItemDialog';
import { MenuItem } from './types/menu';

function App() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const activeCategory = menuData.find((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="text-center mb-12">
            <h1
              className="text-6xl font-black mb-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
              style={{ direction: 'rtl' }}
            >
              Baker.J
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              <p className="text-yellow-400 text-lg font-medium" style={{ direction: 'rtl' }}>
                بيكرجي
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            </div>
            <p className="text-neutral-400 text-sm" style={{ direction: 'rtl' }}>
              أشهى المأكولات اللبنانية الأصيلة
            </p>
          </div>

          <MenuTabs
            categories={menuData.map((cat) => ({ id: cat.id, name: cat.name }))}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {activeCategory?.items.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* الحوار بينعرض بس إذا في selectedItem */}
      {selectedItem && (
        <MenuItemDialog
          isOpen={true}
          item={selectedItem as MenuItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default App;