import { SendTelegramMessageFormType, sendTelegramMessageSchema } from "@/app/schemas/sendTelegramMessageSchema";
import ButtonWithLoader from "./ButtonWithLoader";
import TextInputWithLabel from "./TextInputWithLabel";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Form } from "./ui/form";
import ErrorDialog from "./ErrorDialog";
import { useForm } from "react-hook-form";
import { useState } from "react";
import userServices from "@/services/userServices";
import SuccessDialog from "./SuccessDialog";

type ITelegramMessageForm = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TelegramMessageForm({
    isOpen, setIsOpen,
}: ITelegramMessageForm){
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
    const [isSuccessDialogOpened, setIsSuccessDialogOpened] = useState(false);
  
    const form = useForm<SendTelegramMessageFormType>({
        resolver: zodResolver(sendTelegramMessageSchema),
        defaultValues: {
            name: undefined,
            message: undefined,
        },
    });

    async function onSubmit(values: SendTelegramMessageFormType) {
        try {
            setIsSaving(true);
            await userServices.sendTelegramMessage(values);
            form.reset({ 
                name: undefined,
                message: undefined,
            });
            setIsSuccessDialogOpened(true);
        } catch {
            setIsErrorDialogOpen(true);
        } finally {
            setIsSaving(false);
            setIsOpen(false);
        }
    }

    return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent className="max-w-[80vw]">
        <DialogHeader>
          <DialogTitle>{"Cвязаться С Нами"}</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <TextInputWithLabel<SendTelegramMessageFormType>
              label="Имя в телеграм"
              nameInSchema="name"
              itemClass="flex flex-col gap-3 items-start"
              inputClass="p-5 h-7 text-sm bg-white !mt-0 w-full"
              labelClass="shrink-0"
              messageClass="hidden"
              placeholder="@никнейм"
            />

            <TextInputWithLabel<SendTelegramMessageFormType>
              label="Ваше Сообщение"
              nameInSchema="message"
              itemClass="flex flex-col gap-3 items-start"
              inputClass="p-5 h-7 text-sm bg-white !mt-0 w-full"
              labelClass="shrink-0"
              messageClass="hidden"
              placeholder="Сообщение (необязательно)"
            />
            <div className="flex gap-5 self-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                Отмена
              </Button>
              <ButtonWithLoader
                type="submit"
                text={"Cвязаться"}
                isLoading={isSaving}
                variant="default"
                className="bg-orange-500 hover:bg-orange-600"
              />
            </div>
            </form>
        </Form>
      </DialogContent>
      <ErrorDialog
        isOpen={isErrorDialogOpen}
        onCloseDialog={() => setIsErrorDialogOpen(false)}
        title="Произошла ошибка при отправке формы"
        message="Приносим извинения за неудобства, пожалуйста попробуйте еще раз позже"
      />
      <SuccessDialog
        isOpen={isSuccessDialogOpened}
        setIsOpen={setIsSuccessDialogOpened}
        onClose={() => setIsSuccessDialogOpened(false)}
        title="Спасибо за ваше обращение. Мы с вами свяжемся в ближайшее время"
      />
    </Dialog>
    )
}
