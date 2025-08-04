'use client';

import { useRef, useState } from 'react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  DatePicker,
  Popover,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  SplitOtpInput,
  Switch,
  useConfirmDialog,
} from '@common/ui';
import { EyeIcon } from '@common/ui/icons';

export default function BoxPages() {
  const otpRef = useRef(null);

  const { openDialog } = useConfirmDialog();

  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grapes', value: 'grapes' },
    { label: 'Pineapple', value: 'pineapple' },
    { label: 'Strawberry', value: 'strawberry' },
    { label: 'Watermelon', value: 'watermelon' },
    { label: 'Blueberry', value: 'blueberry' },
    { label: 'Mango', value: 'mango' },
    { label: 'Peach', value: 'peach' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Kiwi', value: 'kiwi' },
  ];

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const uncontrollDate = useRef<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-4 h-full overflow-auto">
      <div className="h-9">
        <h1 className="text-4xl font-bold">IN BOX LAYOUT</h1>
      </div>

      <div className="relative flex flex-col gap-4 ml-4">
        <DatePicker
          timeType="minute"
          defaultDate={new Date(2025, 7, 3, 11, 22)}
          onDateChange={(date) => {
            console.warn(date);
          }}
          calendarProps={{
            numberOfMonths: 2,
          }}
        />
        <DatePicker
          defaultDate={new Date(2024, 5, 11)}
          dateRef={uncontrollDate}
          className="w-200"
          isArrow
          numberOfMonths={2}
          calendarProps={{
            captionLayout: 'dropdown-months',
            modifiers: {
              highlight: [new Date(2024, 6, 3), new Date(2024, 6, 4)],
            },
            modifiersClassNames: {
              highlight: 'font-bold',
            },
          }}
          inputProps={{
            underline: 'none',
            iconLeft: EyeIcon,
          }}
          disabledCalendar={[{ before: new Date(2024, 6, 1), after: new Date(2024, 6, 10) }]}
        />

        <DatePicker
          timeType="second"
          date={selectedDate}
          onDateChange={(date) => {
            setSelectedDate(date);
          }}
          onConditionRequestCallback={(condDate) => condDate < new Date()}
          conditionContent={(condDate) => `과거를 선택할수 없습니다. ${condDate?.toDateString()} 선택하시겠습니까?`}
          popoverProps={{
            isArrow: true,
          }}
        />

        <DatePicker
          date={selectedDate}
          onDateChange={(date) => {
            setSelectedDate(date);
          }}
          popoverProps={{
            isArrow: true,
          }}
        />

        <p>선택된 날짜: {selectedDate ? selectedDate.toDateString() : '없음'}</p>
      </div>

      <Switch defaultChecked />
      <Switch variant="secondary" defaultChecked />
      <Switch variant="error" defaultChecked />
      <Switch defaultChecked />
      <Switch defaultChecked />
      <Popover trigger={<Button variant="gradient">popover</Button>} size="small">
        <div className="flex flex-col gap-2">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Select
            isContentFitTriggerWidth
            options={[
              { label: 'Eastern Standard Time (EST)ddddddddddddddd', value: 'est1' },
              { label: 'Pacific Standard Time (PST)', value: 'pst1' },
              { type: 'separator' },
              {
                type: 'group',
                label: 'North America',
                items: [
                  { label: 'Eastern Standard Time (EST)', value: 'est' },
                  { label: 'Pacific Standard Time (PST)', value: 'pst' },
                ],
              },
            ]}
          />
        </div>
      </Popover>
      <Separator />
      <SplitOtpInput defaultValue={123456} />
      <SplitOtpInput defaultValue="654321" otpRef={otpRef} />
      <Button
        onClick={() => {
          console.warn(otpRef.current);

          openDialog({
            title: 'warning',
            description: `비제어 ${otpRef.current}`,
            onConfirm: () => console.warn('확인'),
          });
        }}>
        otp unControll
      </Button>
      <SplitOtpInput value="123456" />
      <SplitOtpInput value="123456" />
      <SplitOtpInput value="123456" />
      <SplitOtpInput value="123456" />
      <SplitOtpInput value="123456" />

      <Separator className="my-4" />
      <Card className="w-64">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="w-64">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Separator />
      <RadioGroup defaultValue="banana" options={options} />
      <Separator />
      <Checkbox label="이벤트 중복 방지" />
      <Checkbox label="이벤트 중복 방지" isBox />
      <Checkbox label="이벤트 중복 방지" defaultChecked />
    </div>
  );
}
