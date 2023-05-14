import React, { useState } from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'
import { MainTopNavData } from '@/data/MainTopNavData'
import { useRouter } from 'next/router';

interface Props {
    categories: Category[];
}

export default function MainNavSection({ categories }: Props) {

    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategoryId(categoryId);
    };

    return (
        <>
            <section className={style.MainNavSection}>
                <div className={style.TopCategoriesBox}>
                    {categories.map(category => (
                        <div className={style.TopCategories} key={category.id}>
                            <p onClick={() => handleCategoryClick(category.id)}>{category.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className={style.ContentBox}>
                <div className={style.subCategoriesBox}>
                    {selectedCategoryId !== null && (
                        <>
                            {categories.find(category => category.id === selectedCategoryId)?.subcategories.map(subcategory => (
                                <div className={style.subCategories} key={subcategory.id}>
                                    <p>{subcategory.name}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </section>

        </>
    )
}