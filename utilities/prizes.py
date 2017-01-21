import json

with open ('copypasteprizes.txt', 'r') as f:
    arr = f.readlines()
    counter = 0
    for val in arr:
        if 'Add each of your prizes here. At the end of the hackathon, you will assign each prize to a submission. Prizes can be monetary or non-monetary. For non-US hackathons, contact support@devpost.com to change the currency symbol. If your prize includes cash, please include the cash amount in the “Description” field as well as in the “Cash value” field.' in val:
            break
        counter = counter + 1
    start = counter + 2
    end = start
    for i in range(start, len(arr)):
        if 'Add Prize' in arr[i]:
            end = i
            break

    # start and end have been set
    counter = 0
    fromzero = 0
    prizes = []
    p2 = []
    p3 = []
    for i in range(start, end):
        if counter == 0: 
            prizes.append(arr[i])
            fromzero = fromzero + 1
            counter = counter + 1
            continue
        if counter == 1:
            p2.append(arr[i])
        if counter == 2:
            p3.append(arr[i])
        counter = counter + 1
        if counter % 4 == 0:
            counter = 0
    print('p1')
    for res in prizes:
        print(res)
    print('p2')
    for res in p2:
        print(res)
    print('p3')
    for res in p3:
        print(res)

    result = []
    for i in range(0, len(prizes)):
        result.append({
                'id': 'prize'+str(i),
                'name': prizes[i],
                'heading': p2[i],
                'desc': p3[i],
                })


    print('end')
    print(json.dumps(result, indent=4))



