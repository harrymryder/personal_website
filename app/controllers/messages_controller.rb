class MessagesController < ApplicationController
  def new
    @message = Message.new
  end

  def create
      @message = Message.new message_params
    if @message.valid?
      MessageMailer.contact_me(@message).deliver_now
      redirect_to root_path
      flash[:notice] = "Message received, thanks!"
    else
      flash[:notice] = "There was an error sending your message. Please try again."
      render :new
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :phone_number, :body)
  end
end
