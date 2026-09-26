import React from "react";
import { ATHLETIC_PRODUCTS } from "../mock-data";
import { ShoppingBag, Sparkles, Shield } from "lucide-react";

export function AthleticProducts() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ATHLETIC_PRODUCTS.map((product) => {
          const isAvailable = product.status === "disponivel";

          return (
            <div
              key={product.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-md hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              {/* Product preview banner in deep navy / petroleum blue */}
              <div className="h-44 bg-gradient-to-br from-[#071320] via-[#0b1f33] to-[#0e3b54] p-4 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 flex items-center justify-center font-bold text-xs">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      isAvailable
                        ? "bg-cyan-500/20 text-cyan-200 border border-cyan-400/40"
                        : "bg-slate-700/60 text-slate-300 border border-slate-600"
                    }`}
                  >
                    {isAvailable ? "Pronta Entrega" : "Sob Encomenda"}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="text-[10px] text-cyan-300/90 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Oficial Guaxas · A.A.A.P.U.</span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-2 mt-0.5 group-hover:text-cyan-200 transition-colors">
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
                      <span className="font-semibold text-slate-700">Tamanhos:</span>
                      <span>{product.sizes.join(", ")}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Valor</span>
                    <span className="text-base font-extrabold text-slate-900">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <a
                    href="https://wa.me/5547999999999?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20um%20produto%20Guaxas%20da%20Atl%C3%A9tica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#0b1c2e] hover:bg-cyan-700 rounded-lg transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-cyan-950/5 border border-cyan-900/20 text-xs text-cyan-950 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          <strong>Aviso de compra:</strong> As encomendas de mantos e moletons oficiais Guaxas são abertas no início de cada semestre letivo pela Diretoria de Produtos.
        </p>
        <span className="text-xs text-cyan-800 font-semibold underline">
          Retirada na sala da Atlética (Bloco 21 / Bloco F1)
        </span>
      </div>
    </div>
  );
}
