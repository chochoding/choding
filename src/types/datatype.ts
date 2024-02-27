export type myProjectPostType = {
    date: string,
    overview: string,
    position: string[],
    postId: number,
    title: string,
    userId: string,
    goal: string,
    link: string[],
    member: string[],
    stack: string[],
    imgSrc: string,
    comments: myProjectCommentType[]
}

export type myProjectCommentType = {
    userId: string,
    comment: string,
    date: string
}

export type FilterComponentType = {
    type: string,
    title: string,
    options: string[],
    handleOptionClick: (option:string, title:string) => void,
    activeOptions: string[],
    setValue: (name: keyof myProjectPostType, value: any, options?: Partial<{ shouldValidate: boolean; shouldDirty: boolean }>) => void,
    num: number,
    classname: "title" | "overview" | "goal" | "link" | "date" | "position" | "postId" | "userId" | "member" | "stack" | "imgSrc" | "comments",
    titleGuide: string
};
  
export type ButtonComponentType = {
    label: string,
    onClick: () => void,
    isActive: boolean,
  };