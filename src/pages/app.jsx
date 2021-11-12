import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { IconArt, IconGames, IconMusic, IconSociety, IconSort } from '../assets'
import { Nftcard, Topartist } from '../components'

const categoryType = {
    all : "All",
    music : "Music",
    gaming : "Games",
    art : "Art",
    society : "Society NFT",

};
const category = [
    {
        icon : null,
        name : categoryType.all
    },
    {
        icon : IconArt,
        name : categoryType.art
    },
    {
        icon : IconMusic,
        name : categoryType.music
    },
    {
        icon : IconGames,
        name : categoryType.gaming
    },
    {
        icon : IconSociety,
        name : categoryType.society
    },
]

const sample = [
    {
        img : 'https://picsum.photos/id/237/400',
        title : 'Great Blue sky',
        category : categoryType.music
    },
    {
        img : 'https://picsum.photos/id/234/400',
        title : 'The Adorable',
        category : categoryType.gaming
    },
    {   
        img : 'https://picsum.photos/id/123/400',
        title : 'Great Gig Sky',
        category : categoryType.art
    },
    {
        img : 'https://picsum.photos/id/423/400',
        title : 'Elementor',
        category : categoryType.society
    },
    {   
        img : 'https://picsum.photos/id/412/400',
        title : 'Lose',
        category : categoryType.gaming
    },
    {   
        img : 'https://picsum.photos/id/354/400',
        title : 'Star Falling down',
        category : categoryType.art
    },
    {   
        img : 'https://picsum.photos/id/112/400',
        title : 'Great Waterfall',
        category : categoryType.art
    },
    {   
        img : 'https://picsum.photos/id/564/400',
        title : 'Galaxy',
        category : categoryType.art
    },
    {   
        img : 'https://picsum.photos/id/186/400',
        title : 'With You',
        category : categoryType.art
    },
    {   
        img : 'https://picsum.photos/id/154/400',
        title : 'I love Riska ',
        category : categoryType.art
    },
];

export default function Appnft() {
    const [activeCategory, setActiveCategory] = useState(categoryType.all);

    const nftFiltered = sample.filter((items) => {
        if (activeCategory === categoryType.all) {
            return items
        }
        return items.category === activeCategory 
    })

  return (
    <div className="pt-14 md:pt-24 w-full px-6 md:px-14 bg-dark font-nav pb-24">
        <div className="pt-14">
            <div className="">
                <p
                    className="absolute left-0 right-0 -mt-6 text-prime text-xl font-bold bg-black text-center border border-purple rounded-full w-40 md:w-52 px-4 py-1 md:py-2 mx-auto -mb-6">
                    Top Artist</p>
                <div
                    className="flex md:grid md:grid-cols-4 gap-x-8 gap-y-10 bg-gradient-to-b from-softDark via-softDark to-dark px-0 md:px-5 py-4 md:py-8 rounded-full border-2 border-purple z-0 overflow-x-auto scrollbar-hide md:pl-0">
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                    <Link to="/profile">
                    <Topartist />
                    </Link>
                </div>
            </div>
        </div>
        <div className="mt-10 md:mt-14">
            <p
                className="text-prime text-xl font-bold bg-black text-center border border-purple rounded-full w-40 md:w-52 px-8 py-1 md:py-2 mx-auto">
                Explore</p>
            <div
                className="flex items-center md:grid md:w-max grid-flow-col space-x-5 px-4 md:space-x-6 auto-cols-max bg-greygrad py-2 mx-auto md:px-4 rounded-full mt-4 overflow-x-auto scrollbar-hide ">
                <div>
                <div className="flex justify-center w-8 md:w-8 items-center bg-mediumdark rounded-lg h-full">
                    <img className="w-full" src={IconSort} alt="" />
                    {/* <p className="text-prime text-">Music</p> */}
                </div>
                </div>
                {category.map((items) => {
                return(
                   <div className="" key={items.name} onClick={() => {
                    setActiveCategory(items.name)
                }}>
                        <div 
                        className={`flex cursor-pointer w-max  md:w-auto space-x-1 items-center rounded-full px-4 md:px-3 h-8 md:h-10 ${activeCategory === items.name ? "bg-purple" : "bg-mediumdark"}`}>
                        {items.icon && (
                            <img className="w-8 md:w-10" src={items.icon} alt="" />
                        )}
                        <p className="text-prime text-sm md:text-lg">{items.name}</p>
                    </div>
                   </div>
                )
                })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 px-6 md:px-14 gap-y-14 mt-6 md:mt-8">
                {nftFiltered.map((items) => {
                    return(
                        <Link key={items.title} to="/detail-nft">
                            <Nftcard title={items.title} img={items.img} />
                        </Link>
                    )
                } )}
            </div>
            <div className="flex justify-center mt-14">
                <p className="bg-softDark text-prime text-2xl rounded-full py-2 px-8 hover:bg-purple hover:text-white">
                    Load More</p>
            </div>
        </div>
    </div>
  )
}
