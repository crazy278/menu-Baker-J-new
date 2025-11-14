import { X } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuItemDialogProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function MenuItemDialog({ item, onClose }: MenuItemDialogProps) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="relative bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border-2 border-red-600 rounded-2xl max-w-md w-full shadow-2xl shadow-red-600/20 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-neutral-400 hover:text-red-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {item.image && (
          <div className="w-full h-48 overflow-hidden bg-neutral-800">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4" style={{ direction: 'rtl' }}>
            {item.name}
          </h2>

          <div className="mb-6">
            <p className="text-neutral-300 text-lg mb-4" style={{ direction: 'rtl' }}>
              {item.description}
            </p>

            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-lg">
              <span className="text-yellow-400 text-2xl font-bold">
                {item.price} ل.ل
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-700">
            <p className="text-neutral-400 text-sm" style={{ direction: 'rtl' }}>
              الفئة: {item.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
