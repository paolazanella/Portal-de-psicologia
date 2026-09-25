import React from "react";
import { ATHLETIC_PRODUCTS } from "../mock-data";
import { ShoppingBag, Sparkles } from "lucide-react";

export function AthleticProducts() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ATHLETIC_PRODUCTS.map((product) => {
          const isAvailable = product.status === "disponivel";

          return (
            <div
              key={product.id}
              className="bg-white border border-slate-200/90 rounded-xl overflow-hidden hover:shadow-sm transition-all flex flex-col justify-between"
            >
              {/* Product preview banner / fallback styled box */}
              <div className="h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 p-4 flex flex-col justify-between text-white relative">
                <div className="flex justify-between items-start">
                  <span className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-sm">
                    Ψ
                  </span>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isAvailable
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                    }`}
                  >
                    {isAvailable ? "Pronta Entrega" : "Sob Encomenda"}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] text-amber-300/80 font-medium uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Lojinha da Psicologia</span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 mt-0.5">
                    {product.name}
                  </h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {product.sizes && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                      <span className="font-medium text-slate-700">Tamanhos:</span>
                      <span>{product.sizes.join(", ")}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block">Valor</span>
                    <span className="text-base font-extrabold text-slate-900">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <a
                    href="https://wa.me/5547999999999?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20um%20produto%20da%20Atl%C3%A9tica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          <strong>Aviso de compra:</strong> As encomendas de mantos e moletons são abertas no início de cada semestre letivo pela Diretoria de Produtos.
        </p>
        <span className="text-xs text-amber-800 font-medium underline">
          Entregas realizadas na sala da Atlética
        </span>
      </div>
    </div>
  );
}
