export type signUp = {
    id?: number | number,
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type signIn = Omit<signUp, "name">

export type humorAnalysis = {
    id: string | number,
    date: string,
    mood: string,
    activities: string,
    userId?: string | number
};

export type humorPost = Omit<humorAnalysis, "id">;

export type humorUpdate = Omit<humorAnalysis, "id" | "date">;

export type analysis = {
    id: string | number,
    humorWhy: string,
    howToChange: string,
    userId?: string | number
};

export type analysisPost = Partial<analysis>;