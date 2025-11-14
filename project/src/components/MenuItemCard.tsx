import { MenuItem } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

export default function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 hover:border-red-600 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:scale-105 group flex flex-col h-full"
    >
      {item.image && (
        <div className="w-full h-40 overflow-hidden bg-neutral-800">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors" style={{ direction: 'rtl' }}>
            {item.name}
          </h3>

          <p className="text-neutral-400 text-sm mb-3 line-clamp-2" style={{ direction: 'rtl' }}>
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-red-500 font-bold text-lg">
            {item.price} ل.ل
          </span>
          <span className="text-neutral-500 text-xs px-3 py-1 bg-neutral-800 rounded-full" style={{ direction: 'rtl' }}>
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
}
