'use client';

import { useState } from 'react';

type Props = {
    brands: string[];
    models: Record<string, string[]>;
    brand?: string;
    model?: string
};

export default function BrandModelSelect({ brands, models, brand: carBrand = '', model: carModel = '' }: Props) {
    const [brand, setBrand] = useState(carBrand);
    const [model, setModel] = useState(carModel);


    const availableModels = models[brand] ?? [];

    return (
        <>
            <div className="">
                <label htmlFor="brand">
                    Brand
                </label>
                <div className="">
                    <select
                        id="brand"
                        name="brand"
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value);
                            setModel('');
                        }}
                        className=""

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

            <div className="">
                <label htmlFor="model">
                    Model
                </label>
                <div className="">
                    <select
                        id="model"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        disabled={!brand}
                        className="ช"

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