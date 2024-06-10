export interface I_PaginationLinks {
    url: string | null, 
    label: string, 
    active: boolean
}

export interface I_Recipe {
    id: string,
    name: string,
    link: string,
    description: string,
    slug: string,
    created_at: string,
    updated_at: string
}

export interface I_RecipesData {
    current_page: number,
    data: I_Recipe[],
    first_page_url: string, 
    from: number, 
    last_page: number, 
    last_page_url: string,
    next_page_url: string | null, 
    path: string, 
    per_page: number, 
    prev_page_url: string | null, 
    to: number, 
    total: number,
    links: I_PaginationLinks[]
}