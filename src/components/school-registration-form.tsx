"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { createOrganization } from "@/action/auth-actions";
import { useRouter } from "next/navigation";
import FileUpload from "./global/file-upload";


export const formSchemaSchool = z.object({
  name: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  subdomain: z
    .string()
    .min(3, {
      message: "Subdomain must be at least 3 characters.",
    })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message:
        "Subdomain can only contain lowercase letters, numbers, and hyphens.",
    }),
  logo: z.string().optional(),
});

export function SchoolRegistrationForm() {
  const router = useRouter();
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchemaSchool>>({
    resolver: zodResolver(formSchemaSchool),
    defaultValues: {
      name: "",
      subdomain:"",
    },
  });
  const isLoading = form.formState.isSubmitting;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchemaSchool>) {
    const response =await createOrganization(values);
    if (response?.success) {
      toast.success("School has been created");
      router.push("/dashboard");
    } else {
      toast.error("School has not been created");
    }
  }
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Create School</CardTitle>
        <CardDescription>
          Enter your details below to create a new school
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subdomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subdomain</FormLabel>
                  <FormControl>
                    <Input placeholder="acme" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your organization will be accessible at {field.value}
                    .yourdomain.com
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                    <FileUpload
                      apiEndpoint="imageUploader"
                      onChange={field.onChange}
                      value={field.value}
                    />
                    {/* <Input type="file" {...field} /> */}
                  </FormControl>
                  <FormDescription>
                    Upload a logo for your organization (max 5MB, .jpg, .png,
                    .webp, or .svg)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">
              {isLoading ? (
                <LoaderCircle className="w-4 h-4 animate-spin" />
              ) : (
                "Create School"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
