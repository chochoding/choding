export type myProjectPostType = {
    date: string,
    overview: string,
    position: string[],
    postId: number,
    title: string,
    goal: string,
    link: string,
    member: string[],
    stack: string[],
    image: string,
    like: LikeUserEmail[],
    comments: myProjectCommentType[],
    name: string | null | undefined,
    email: string | null | undefined
}

export type LikeUserEmail = {
    email: string
}

export type myProjectCommentType = {
    updateKey: string,
    updateValue: number,
    updateType: string,
    field: string,
    value: {
        name: string | null | undefined,
        email: string | null | undefined,
        image: string | null | undefined,
        comment: string,
        date: string
    }
}

export type FilterComponentType = {
    watch: (type: string) => string[],
    type: string,
    title: string,
    options: string[],
    handleOptionClick: (option: string, title: string) => void,
    activeOptions: string[],
    setValue: (name: keyof myProjectPostType | string, value: any, options?: Partial<{ shouldValidate: boolean; shouldDirty: boolean }>) => void,
    num: number,
    classname: "title" | "overview" | "goal" | "link" | "date" | "position" | "postId" | "userId" | "member" | "stack" | "imgSrc" | "comments",
    titleGuide: string
};

export type ButtonComponentType = {
    label: string,
    onClick: () => void,
    isActive: boolean,
};

export type googleSearchItem = {
    "title": string,
    "link": string
    "displayLink": string,
    "snippet": string,
    "pagemap": {
        "cse_thumbnail": [
            {
                "src": string,
                "width": string,
                "height": string
            }
        ],
        "metatags": [
            {
                "twitter:description": string
            }
        ]
    }
};


export type naverSearchItem = {
    "title": string,
    "link": string,
    "description": string,
    "bloggername": string,
    "bloggerlink": string,
    "postdate": string
};