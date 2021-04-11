 let students = [
    {id: 1, name: 'tran van a', className: '.net', classId:11},
    {id: 2, name: 'tran van b', className: '.net', classId:11},
    {id: 3, name: 'tran van c', className: 'angular', classId:12},
    {id: 4, name: 'tran van d', className: 'angular', classId:12},
    {id: 5, name: 'tran van e', className: 'java', classId:13},
    {id: 6, name: 'tran van f', className: 'java', classId:13},
    {id: 7, name: 'tran van g', className: 'java', classId:13},
    {id: 8, name: 'tran van h', className: 'test', classId:14},
    {id: 9, name: 'tran van i', className: 'test', classId:14},
    {id: 10, name: 'tran van j', className: 'test', classId:14}
    ];

let newArray = students.reduce(function(arr,student)
{
    let key = `${student.classId}.${student.className}`;
    arr[key] = arr[key] || {
        classId: student.classId,
        className: student.className,
        students: []
    }
    arr[key].students.push({
        id: student.id,
        name: student.name,
        className: student.className,
        classId: student.classId
    })
    return arr;
},{});
    var result = Object.values(newArray);

    document.body.innerHTML =
    "<pre>" + JSON.stringify(result, null, "  ") + "</pre>";