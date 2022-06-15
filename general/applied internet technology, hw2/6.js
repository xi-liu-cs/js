function my_read_file(file_name, success_fn, error_fn)
{
    fs.readFile(file_name, 'utf-8', (err, data)) =>
    {
        if(!err)
            success_fn(data);
        else
            error_fn(err);
    }
}
