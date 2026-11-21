'use client';

import { useState } from 'react';

type Props = {
    brands: string[];
    models: Record<string, string[]>;
};

export default function BrandModelSelect({ brands, models }: Props) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');


    const availableModels = models[brand] ?? [];

    return (
        <>
            <div className="mb-4">
                <label htmlFor="brand">
                    Brand
                </label>
                <div className="relative">
                    <select
                        id="brand"
                        name="brand"
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                            setModel('');
                        }}
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

                    >
                        <option value="">Select a brand</option>
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="mb-4">
                <label htmlFor="model">
                    Model
                </label>
                <div className="relative">
                    <select
                        id="model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        disabled={!brand}
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

                    >
                        <option value="">Select a model</option>
                        {availableModels.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}