import {
    BaseResponse,
    CreatePostResult,
    Post,
    PostInput
} from "@yarn-workspace/server";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";
import { axiosClient } from "../utils/axios";
import { useEffect } from "react";

interface IProps {}

export function Form({}: IProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<PostInput>();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const createPost = await axiosClient.post<
            PostInput,
            AxiosResponse<CreatePostResult>
        >("/posts", {
            ...data
        });
        if (createPost.status !== 201) {
            console.error(createPost.data);
            return;
        }
        console.log(createPost.data);
        reset();
    });

    useEffect(() => {
        reset();
    }, [reset]);

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input {...register("title")} />
                <label>Publish?</label>
                <input type='checkbox' {...register("isPublished")} />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}
